import st from 'styled-components';

const ListStyle = st.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 25px;
    margin: 50px auto;
    width: 1000px;
`

const Item = st.li`
	list-style-type:none;
	position: relative;
	border: 1px solid #ddd;
    box-shadow: 5px 5px 15px rgba(0,0,0, .2);
`

const Button = st.button`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    border: none;
    border: 1px solid #ddd;
    outline: none;
    user-select: none;

    &:hover{
        background: #eaeaea;
    }
    &:active{
        background: #bbb;
    }
`

const Checkbox = st.span.attrs(props => ({
    className: props.className
}))`
    & .checked:after{
            content: "";
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: rgb(58, 58, 104);
    }
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    position: absolute;
    background: white;
    left: 10px;
    top: 10px;
`

export { Button, Checkbox, ListStyle, Item }
