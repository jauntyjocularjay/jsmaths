import { expects } from '../module/jestr/Jestr';
import { mean } from '../functions/mean';

describe('mean() Jestr tests', () => {
    let i = 0;
    const meanArray: number[][] = [
        [35, 20, 15, 50, 40],
        [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
        [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20],
        [3],
    ];

    meanArray.forEach(meanSet => {
        describe(`Given the set [${meanSet}], find the mean`, () => {
            let total = 0.0;
            let target = 0.0;
            let subject = 0.0;

            meanSet.forEach(num => {
                total += num;
            });

            subject = mean(meanSet);
            target = total / meanSet.length;

            if (Number.isInteger(subject) && Number.isInteger(target)) {
                expects.toBe.number(`the mean of [${meanSet}]`, subject, target);
            } else {
                expects.toBe.closeToNumber(`the mean of [${meanSet}]`, subject, target);
            }

            i++;
        });
    });
});
