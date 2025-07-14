import { expects } from '../module/jestr/Jestr';
import { range } from '../functions/range';

describe('range() Jestr tests', () => {
    /*
        The mode is the most commonly occurring data point in a
        dataset. The mode is useful when there are a lot of repeated
        values in a dataset. There can be no mode, one mode, or
        multiple modes in a dataset.
    */
    const rangeArray = [
        [35, 20, 15, 50, 40],
        [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
        [5, 4],
        [3],
        []
    ];

    rangeArray.forEach(rangeSet => {
        describe(`passing the set into range([${rangeSet}])`, () => {
                let subject: number[];
                let target: number[];


                rangeSet = rangeSet.sort((a,b) => a-b);

                if (rangeSet.length > 2) {
                    target = [
                        rangeSet[0],
                        rangeSet[rangeSet.length - 1]
                    ]
                }
                else {
                    target = rangeSet;
                }

                try{
                    subject = range(rangeSet);
                    subject.forEach((subjectValue) => {
                        expects.array.toContain(`the value: ${subjectValue}`, subjectValue, `target array [${target}]`, target);
                    });
                } catch (error) {
                    expects.toThrow(`Passing an empty array into the function: range([${rangeSet}])`, () => range(rangeSet));
                }
        })
    });
});
