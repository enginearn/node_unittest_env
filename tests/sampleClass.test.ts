import { SampleClass } from '../src/sampleClass';

let hoge = new SampleClass();

describe('sampleClassのテスト', () => {
    test('sample1', () => {
        expect(hoge.tasu(1, 1)).toBe(2);
    });

    test('sample2', () => {
        expect(hoge.tasu(2, 1)).toBe(4);
    });
});
