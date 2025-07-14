import { expects, StubError } from '../module/jestr/Jestr';
import { percentile } from '../functions/percentile';

describe('percentile() Jestr tests', () => {
    /*

    */
    const percentileArray = [
        [35, 20, 15, 50, 40],
        [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
        [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20],
        [3],
        [10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 13, 13, 8, 19, 35, 22, 17, 19, 19, 12, 21, 9, 9, 12],
        [16, 10, 12, 8, 15, 18, 20, 9, 11, 1, 13, 17, 9, 10, 14],
        []
    ];

    percentileArray.forEach(percentileSet => {
        throw new StubError(`Percentile jestr tests`);
        describe(`the percentile from this set [${percentileSet}]`, () => {
            let subject: number;
            let target: number;
            let percentiles: number[] = [10, 25, 33, 50, 66, 75, 90];

            percentiles.forEach(number => {
                try {
                    subject = percentile(percentileSet, number);
                    expects.toBe.number(`the`, 1, 1);
                } catch (error) {
                    expects.toThrow(`Passing into the function: percentile([${percentileSet}], ${number})`, () =>
                        percentile(percentileSet, number),
                    );
                }
            });
        });
    });
});

