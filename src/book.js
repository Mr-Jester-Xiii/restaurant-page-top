const formInputs = [
  {
    id: "nameInput",
    label: "Name",
    type: "text",
    class: "form-control w-25",
    placeholder: null,
    options: null,
  },
  {
    id: "emailInput",
    label: "Email address",
    type: "email",
    class: "form-control w-25",
    placeholder: "name@example.com",
    options: null,
  },
  {
    id: "numberInput",
    label: "Number of people",
    type: "select",
    class: "form-select w-auto",
    placeholder: null,
    options: [
      {
        text: "1",
        value: "1",
      },
      {
        text: "2",
        value: "2",
      },
      {
        text: "3",
        value: "3",
      },
      {
        text: "4",
        value: "4",
      },
      {
        text: "5",
        value: "5",
      },
      {
        text: "6",
        value: "6",
      },
    ],
  },
  {
    id: "reqInput",
    label: "Additional requirements",
    type: "textarea",
    class: "form-control w-50",
    placeholder: null,
    options: null,
  },
];

function renderBook() {
  const container = document.getElementById("content");
  const row = Object.assign(document.createElement("div"), {
    className: "row",
  });
  const col = Object.assign(document.createElement("div"), {
    className: "col",
  });

  formInputs.forEach((input) => {
    console.log(input.type);
    const div = Object.assign(document.createElement("div"), {
      classList: "mb-3",
    });
    const label = Object.assign(document.createElement("label"), {
      for: input.id,
      innerText: input.label,
    });
    div.appendChild(label);
    switch (input.type) {
      case "select":
        const sel = Object.assign(document.createElement("select"), {
          id: input.id,
          classList: input.class,
        });
        input.options.forEach((option) => {
          const opt = Object.assign(document.createElement("option"), {
            innerText: option.text,
            value: option.value,
          });
          sel.appendChild(opt);
        });
        div.appendChild(sel);
        container.append(div);
        break;
      case "textarea":
        const ta = Object.assign(document.createElement("textarea"), {
          classList: input.class,
          id: input.id,
        });
        div.appendChild(ta);
        container.append(div);
        break;
      default:
        const inp = Object.assign(document.createElement("input"), {
            type: input.type,
            classList: input.class,
            id: input.id,
            placeholder: input.placeholder ? input.placeholder : ''
        });
        div.appendChild(inp);
        container.append(div);
    }
  });

  const button = Object.assign(document.createElement("button"), {
    type: 'button',
    classList: 'btn btn-primary mt-5',
    innerText: 'Book now'
  });
  container.appendChild(button);
}

export { renderBook };
