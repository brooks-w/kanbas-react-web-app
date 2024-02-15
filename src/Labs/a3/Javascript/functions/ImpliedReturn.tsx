function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <>
            <h2>Implied Return</h2>
            <p>fourTimesFive = multiply(4, 5)
            <br />
            fourTimesFive = {fourTimesFive}
            </p>
        </>
    );
}

export default ImpliedReturn;