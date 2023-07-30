const reversePromptHandler = (req, res) => {
    const response = { result: 'Reverse prompt response' };
    res.json(response);
}

module.exports = {
    reversePromptHandler,
};
