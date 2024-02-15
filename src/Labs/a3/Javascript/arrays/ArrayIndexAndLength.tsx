function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <>
        <h2>Array and Index Length</h2>
        <p>
            numberArray1 = {numberArray1}
            <br />
            numberArray1.length = {length1}
            <br />
            numberArray1.indexOf(3) = {index1}
            </p>
        </>
    )
}

export default ArrayIndexAndLength