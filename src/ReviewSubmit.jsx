function ReviewSubmit({ formData }) {
  function showFormData() {
    console.log(formData);
  }
  return (
    <div>
      <p>Review and Submit</p>
      <p onClick={showFormData}>Show</p>
    </div>
  );
}

export default ReviewSubmit;
