import { useEffect, useState } from 'preact/hooks';
import './app.css';

export function App() {

  const initialValues = { firstName: "", lastName: "", username: "", email: "", password: "", phone: "", country: "", city: "", pan: "", aadhar: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully", formValues);
      // Place form submission logic here (e.g., API call)
      setIsSubmit(false); // Reset isSubmit after submission
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email format is invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }
    if (!values.pan) {
      errors.pan = "PAN number is required!";
    }
    if (!values.aadhar) {
      errors.aadhar = "Aadhar Number is required!";
    }
    if (!values.country) {
      errors.country = "Please select a country!";
    }
    if (!values.city) {
      errors.city = "Please select a city!";
    }

    return errors;
  }

  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={handleOnSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.firstName}
            aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
          />
          {formErrors.firstName && <small id="firstName-error" className="text-danger">{formErrors.firstName}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.lastName}
            aria-describedby={formErrors.lastName ? "lastName-error" : undefined}
          />
          {formErrors.lastName && <small id="lastName-error" className="text-danger">{formErrors.lastName}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.username}
            aria-describedby={formErrors.username ? "username-error" : undefined}
          />
          {formErrors.username && <small id="username-error" className="text-danger">{formErrors.username}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.email}
            aria-describedby={formErrors.email ? "email-error" : undefined}
          />
          {formErrors.email && <small id="email-error" className="text-danger">{formErrors.email}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.password}
            aria-describedby={formErrors.password ? "password-error" : undefined}
          />
          {formErrors.password && <small id="password-error" className="text-danger">{formErrors.password}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.phone}
            aria-describedby={formErrors.phone ? "phone-error" : undefined}
          />
          {formErrors.phone && <small id="phone-error" className="text-danger">{formErrors.phone}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <select
            className="form-select"
            id="country"
            name="country"
            value={formValues.country}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.country}
            aria-describedby={formErrors.country ? "country-error" : undefined}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            {/* Add more countries as needed */}
          </select>
          {formErrors.country && <small id="country-error" className="text-danger">{formErrors.country}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select
            className="form-select"
            id="city"
            name="city"
            value={formValues.city}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.city}
            aria-describedby={formErrors.city ? "city-error" : undefined}
          >
            <option value="">Select City</option>
            <option value="Jaipur">Jaipur</option>
            <option value="ChittorGarh">Chittorgarh</option>
            <option value="Udaipur">Udaipur</option>
            {/* Add city options conditionally if needed */}
          </select>
          {formErrors.city && <small id="city-error" className="text-danger">{formErrors.city}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="pan" className="form-label">PAN Number</label>
          <input
            type="text"
            className="form-control"
            id="pan"
            name="pan"
            placeholder="PAN Number"
            value={formValues.pan}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.pan}
            aria-describedby={formErrors.pan ? "pan-error" : undefined}
          />
          {formErrors.pan && <small id="pan-error" className="text-danger">{formErrors.pan}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="aadhar" className="form-label">Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            id="aadhar"
            name="aadhar"
            placeholder="Aadhar Number"
            value={formValues.aadhar}
            onChange={handleOnChange}
            aria-invalid={!!formErrors.aadhar}
            aria-describedby={formErrors.aadhar ? "aadhar-error" : undefined}
          />
          {formErrors.aadhar && <small id="aadhar-error" className="text-danger">{formErrors.aadhar}</small>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}
