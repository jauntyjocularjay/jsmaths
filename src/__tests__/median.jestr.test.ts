import { expects } from '../module/jestr/Jestr';
import { median } from '../functions/median';

describe('median() Jestr tests', () => {
    /*
        To find the median:
            Arrange the data points from smallest to largest.
            If the number of data points is odd, the median is the middle data point in the list.
            If the number of data points is even, the median is the average of the two middle data points in the list.

        This implementation of median preserves data and returns the resulting data points. If the median would average
        2 values togeter, this implementation returns an array of two values.
    */
    const medianArray = [
        [35, 20, 15, 50, 40],
        [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
        [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20],
        [3, 1],
        [3],
        [500,100,95,781,354,8791,36],
        [15,1000015, 58144352216, 2]
    ];

    medianArray.forEach(medianSet => {
        describe(`Given the array [${medianSet}], find the median`, () => {
            const isEven = medianSet.length % 2 == 0;
            const subject = median(medianSet);
            let target: number[];

            medianSet = medianSet.sort((a, b) => a - b);

            if (isEven) {
                target = [
                    medianSet[medianSet.length / 2 - 1], // -1 for INDEXING
                    medianSet[medianSet.length / 2],
                ];
            } else {
                target = [medianSet[Math.floor(medianSet.length / 2)]];
            }

            subject.forEach(subjectValue => {
                expects.array.toContain(`the jsmaths result: ${subjectValue}`, subjectValue, `containing the median: [${target}]`, target);
            });
        });
    });
});
