function renderHome() {
  const container = document.getElementById("content");

  const row = Object.assign(document.createElement("div"), {
    className: "row"
  });
  const col = Object.assign(document.createElement("div"), {
    className: "col"
  });
  const title = Object.assign(document.createElement("h2"), {
    className: "mb-5",
    innerText: "Welcome"
  });
  col.appendChild(title);
  const text = Object.assign(document.createElement("p"), {
    innerText: " Mauris imperdiet lorem placerat, dignissim mi quis, pharetra nulla. Donec non arcu eros. Pellentesque at eros quis purus interdum vulputate. Donec gravida aliquet venenatis. Aenean sit amet ullamcorper magna, in porttitor arcu. Integer dictum turpis fringilla, vulputate nisl quis, commodo tortor. Cras fringilla est turpis, vel imperdiet neque ultricies et. Vivamus ornare vel libero sed varius. Vivamus non ultricies justo. Quisque sed mauris bibendum, dapibus sem sed, euismod lacus. Sed vehicula sit amet tortor id tempor. Curabitur dolor massa, molestie vitae pharetra non, tristique vitae lacus. Suspendisse sit amet mollis ante. Proin id pharetra orci. Morbi finibus, quam at mattis blandit, nulla eros varius leo, id lobortis nisi ligula id nibh. Sed vel elit sit amet neque fringilla eleifend eu a nulla. Sed viverra ullamcorper erat, ac finibus purus cursus quis. Proin commodo ligula dui, sed iaculis risus consectetur vel. Phasellus hendrerit at lacus ac pretium. Proin convallis metus non mollis suscipit. Fusce pellentesque urna ac nisl condimentum, at lobortis nisl congue. Suspendisse rutrum consequat urna, in suscipit massa aliquam sagittis. Nullam feugiat lacus sit amet bibendum tincidunt. Nullam cursus eu neque quis facilisis."
  });
  col.appendChild(text);
  row.append(col);
  container.append(row);
}

export { renderHome }
