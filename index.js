class ArrayOperation {
    _delimiter = 2;

    /**
     * позволяет инициализировай объекты, т.е. при создании дочернего класса с такимиже объектами, они примут свойства
     * прописанные в этом классе
     * @param array создает массив
     * @param startDigit задает начальное значение
     * @param finishDigit задает конечное згначение
     * @param delimiter задает делитель вводимый пользователем
     */

    constructor(array = [], startDigit = 0,
                finishDigit = 0, delimiter = null)
    {
        this.array = array;
        this.startDigit = startDigit;
        this.finishDigit = finishDigit;
        this.delimiter = delimiter;
    }

    /**
     * заполняет четными числами
     */
    inputOddDigit() {
        this._process(this._delimiter, true);
    }

    /**
     * заполняет нечетными числами
     */

    inputNotOddDigit() {
        this._process(this._delimiter);
    }

    /**
     * функция позволяющая задать делитель впучную
     */

    inputManualDelimiterDigit () {
        if (!this.delimiter) {
            console.error('Не задано свойство delimiter');
            return;
        }

        this._process(this.delimiter);
    }

    /**
     * функция для вывода массива
     */

    printArray() {
        console.log(this.array);
    }

    /**
     * фнкция для проверки длины массива, если массив пустой выводит ошибку
     * @private
     */

    _checkArray() {
        if (this.array.length) {
            this.array = [];
            console.warn('Данные в массиве были удалены');
        }
    }

    /**
     * функция дл проверки значения начала и конца массива
     * @private
     */

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

    /**
     * процесс для проверки длины массива, а также значений его начала и конца,
     * но для чего он нужен спросить у Евгения!!!
     * @param delimiter
     * @param isNot
     * @private
     */

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