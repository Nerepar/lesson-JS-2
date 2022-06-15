class ArrayOperation {
    _delimiter = 2;

    constructor(array = [], startDigit = 0,
                finishDigit = 0, delimiter = null)
    {
        this.array = array;
        this.startDigit = startDigit;
        this.finishDigit = finishDigit;
        this.delimiter = delimiter;
    }

    inputOddDigit() {
        this._process(this._delimiter, true);
    }

    inputNotOddDigit() {
        this._process(this._delimiter);
    }

    inputManualDelimiterDigit () {
        if (!this.delimiter) {
            console.error('Не задано свойство delimiter');
            return;
        }

        this._process(this.delimiter);
    }

    printArray() {
        console.log(this.array);
    }

    _checkArray() {
        if (this.array.length) {
            this.array = [];
            console.warn('Данные в массиве были удалены');
        }
    }

    _checkStartAndFinishDigit() {
        if (this.startDigit === this.finishDigit) {
            console.warn('Диапазон равен 0');
        } else if (this.startDigit > this.finishDigit) {
            let temp = this.startDigit;
            this.startDigit = this.finishDigit;
            this.finishDigit = temp;
            console.warn('Значение начала диапазон больше его конца. ' +
                'Они будут заменены');
        }

        if (this.startDigit < 0) {
            this.startDigit = -this.startDigit;
            console.warn('Значение начала диапазона будет взято по модулю');
        }

        if (this.finishDigit < 0) {
            this.finishDigit = -this.finishDigit;
            console.warn('Значение конца диапазона будет взято по модулю');
        }
    }

    _process(delimiter, isNot = false) {
        this._checkArray();
        this._checkStartAndFinishDigit();

        for (let i = this.startDigit; i <= this.finishDigit; i++) {
            if (isNot ? !(i % delimiter) : i % delimiter) {
                this.array.push(i);
            }
        }
    }
}