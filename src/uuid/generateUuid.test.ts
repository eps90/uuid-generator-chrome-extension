describe("generateUuid function", () => {
    it("should return UUID value", () => {
        const returnValue = "some uuid";
        const generateUuid = getFunctionUnderTest(returnValue);

        expect(generateUuid()).toEqual(returnValue);
    });

    function getFunctionUnderTest(generatedValue: string) {
        jest.doMock("uuid/v4", () => {
            return () => generatedValue;
        });

        return require("./generateUuid").default;
    }
});
