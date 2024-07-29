// import { createContext, useCallback, useState } from "react";
// import { baseUrl, postRequest } from "./utils/service";
// import axios from "axios";
// export const MyContext = createContext();

// const AppContext = ({ children }) => {
//   const [registerError, setRegisterError] = useState(null);
//   const [isRegisterLoading, setIsRegisterLoading] = useState(false);
//   const [loginError, setLoginError] = useState(null);
//   const [isloginLoading, setIsLoginLoading] = useState(false);
//   const [person, setPerson] = useState(null);
//   const [message, setMessage] = useState("");
//   const [body, setBody] = useState({});
//   const [user, setUser] = useState({});
//   const [registerInfo, setRegisterInfo] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });
//   console.log("registerInfo", registerInfo);
//   const updateRegisterInfo = useCallback((info) => {
//     setRegisterInfo(info);
//   }, []);

//   const registerUser = useCallback(
//     async (e) => {
//       e.preventDefault();
//       setIsLoginLoading(true);
//       setRegisterError(null);

//       // set configurations
//       const configuration = {
//         method: "post",
//         url: `${baseUrl}/register`,
//         data: {
//           registerInfo,
//         },
//       };

//       // make the API call
//       axios(configuration)
//         .then((result) => {
//           console.log(result);
//         })
//         .catch((error) => {
//           console.log(error);
//         });

//       // const response = await postRequest(
//       //   `${baseUrl}/register`,
//       //   JSON.stringify({ registerInfo })
//       // );
//       // console.log("registerInfobb", registerInfo);

//       setIsRegisterLoading(false);
//       if (response.error) {
//         return setRegisterError(response);
//       }
//       localStorage.setItem("User", JSON.stringify(response));
//       setUser(response);
//     },
//     [registerInfo]
//   );

//   // const { message, person } = response;
//   // localStorage.setItem("User", JSON.stringify(person));
//   // setPerson(person);
//   // setMessage(message);

//   const loginUser = useCallback(async () => {
//     setIsLoginLoading(true);
//     setLoginError(null);

//     const response = await postRequest(
//       `${baseUrl}/login`,
//       JSON.stringify(body)
//     );
//     setIsLoginLoading(false);
//     if (response.error) {
//       return setLoginError(response);
//     }
//     const { message, person } = response;
//     localStorage.setItem("User", JSON.stringify(person));
//     setPerson(person);
//     setMessage(message);
//   });

//   return (
//     <MyContext.Provider
//       value={{
//         registerUser,
//         setIsRegisterLoading,
//         isRegisterLoading,
//         message,
//         setMessage,
//         person,
//         setPerson,
//         registerError,
//         setRegisterError,
//         body,
//         setBody,
//         setIsLoginLoading,
//         setIsRegisterLoading,
//         setLoginError,
//         loginError,
//         loginUser,
//         isRegisterLoading,
//         isloginLoading,
//         registerInfo,
//         updateRegisterInfo,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// };

// export default AppContext;
