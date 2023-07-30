function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    var message = "".concat(text, ", and its size is ").concat(size);
    console.log(message);
}
make_shirt(); // Large shirt with the default message
make_shirt('medium'); // Medium shirt with the default message
make_shirt('large', 'YOYOYO'); // Large shirt with a custom message
