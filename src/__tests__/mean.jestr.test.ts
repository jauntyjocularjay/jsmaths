import { expects } from '../module/jestr/Jestr';
import { mean } from '../functions/mean';

describe('mean() Jestr tests', () => {
    let i = 0;
    const meanArray: number[][] = [
        [35, 20, 15, 50, 40],
        [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
        [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20],
        [3],
        []
    ];

    meanArray.forEach(meanSet => {
        describe(`The mean from this set [${meanSet}]`, () => {
                    let total = 0.0;
                    let target = 0.0;
                    let subject: number;

                    meanSet.forEach(num => {
                        total += num;
                    });

                    target = total / meanSet.length;

                    try{
                        subject = mean(meanSet);
                        if (Number.isInteger(subject) && Number.isInteger(target)) {
                        expects.toBe.number(`the mean of [${meanSet}]`, subject, target);
                        }
                        else {
                            expects.toBe.closeToNumber(`the mean of [${meanSet}]`, subject, target);
                        }
                    } catch(error) {
                        expects.toThrow(`Find the mean of an empty array, mean([${meanSet}])`, () => {
                            mean(meanSet);
                        });
                    }

                    i++;
        });
    });
});
