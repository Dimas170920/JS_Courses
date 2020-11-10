/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
    function zero(numb) {
        if (numb < 10) {
            return '0' + String(numb);
        }
        return String(numb);
    }

    return{
        resource : data1 = new Date(date),
        get value() {

            var fullYear = this.resource.getFullYear();
            var month = zero(this.resource.getMonth() + 1);
            var dateIs = zero(this.resource.getDate());
            var hours = zero(this.resource.getHours());
            var minutes = zero(this.resource.getMinutes());
            return fullYear + '-' + month + '-' + dateIs + ' ' + hours + ':' + minutes;
        },
        add(numb,moment) {
            if(numb<0){
                throw new TypeError('аргумент отрицательный');
            }
            switch (moment){
                case 'minutes' :
                    this.resource.setMinutes(this.resource.getMinutes() + numb);
                break;
                case 'hours' :
                    this.resource.setHours(this.resource.getHours() + numb );
                    break;
                case 'days' :
                    this.resource.setDate(this.resource.getDate() + numb);
                    break;
                case 'months' :
                    this.resource.setMonth(this.resource.getMonth() + numb);
                    break;
                case 'years' :
                    this.resource.setFullYear(this.resource.getFullYear() + numb);
                    break;
                default :
                    throw new TypeError('неизвестная единица измерения');
                    break;
            }
        return this;
        },
        subtract(numb,moment) {
            if(numb<0){
                throw new TypeError('аргумент отрицательный');
            }
            switch (moment){
                case 'minutes' :
                    this.resource.setMinutes(this.resource.getMinutes() - numb);
                    break;
                case 'hours' :
                    this.resource.setHours(this.resource.getHours() - numb );
                    break;
                case 'days' :
                    this.resource.setDate(this.resource.getDate() - numb);
                    break;
                case 'months' :
                    this.resource.setMonth(this.resource.getMonth() - numb);
                    break;
                case 'years' :
                    this.resource.setFullYear(this.resource.getFullYear() - numb);
                    break;
                default :
                    throw new TypeError('неизвестная единица измерения');
                    break;
            }
            return this;
        }
    }
};
