const Styling = (WrappedComponent, style) => {
    return props => <WrappedComponent {...props} style={style} />;
}

export default Styling;