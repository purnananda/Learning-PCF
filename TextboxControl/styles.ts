import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    provider: {
        border: "1px",
        borderRadius: "5px",
        padding: "5px",
    },
    container: {
        display: 'flex',
        minHeight: '5rm',
        paddingTop: '8px',
        paddingLeft: '8px',
        backgroundColor: '#f0f0f0',
    },
});

export { useStyles };