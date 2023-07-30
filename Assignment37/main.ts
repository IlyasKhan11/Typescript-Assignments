function make_shirt(size = 'large', text = 'I love TypeScript') {
    const message = `${text}, and its size is ${size}`;
    console.log(message);
}

make_shirt(); // Large shirt with the default message
make_shirt('medium'); // Medium shirt with the default message
make_shirt('large', 'YOYOYO'); // Large shirt with a custom message
