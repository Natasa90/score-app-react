const LayoutStyle = {
    display: 'flex',
    flexFlow: 'wrap column',
    alignItems: 'center',
    justifyContent: 'center',
};

export const Layout = ({children}: any) => {
    return (
        <main style={LayoutStyle}>
            {children}
        </main>
    )
}