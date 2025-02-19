import format from 'format';
const printf = format.printf;

const printWithFormat = (format, ...variables) => {
    if (typeof format !== 'string') return;
    if (variables.length < 1) return printf(format);
    printf(format, ...variables);
};

export default printWithFormat;