import { FormEvent } from "react";

export function UncontrolledForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    console.log("formData", formData);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log("formDataObject", formDataObject);

    alert(`Form submitted: ${JSON.stringify(formDataObject)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled Form</h1>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="message" placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
  );
}
