function AddForm() {
  return (
    <div className="bg-light d-flex p-4 align-items-center">
      <input className="form-control me-3" type="text" placeholder="Date" />
      <input className="form-control me-3" type="text" placeholder="Location" />
      <input className="form-control me-3" type="text" placeholder="Price" />

      <button className="btn btn-info">Add</button>
    </div>
  );
}

export default AddForm;
