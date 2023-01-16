import axios from "axios";


export const multiMailer = async (complaint, user) => {
    // let layout;
    let response;
    // switch (complaint.status) {
    //     case "complaintNew":
    //         layout = "complaint/new"
    //         break
    //     case "complaintProgress":
    //         layout = "complaint/in_progress"
    //         break
    //     case "complaintAccepted":
    //         layout = "complaint/approved"
    //         break
    //     case "complaintRejected":
    //         layout = "complaint/rejected"
    //         break
    // }
    console.log(complaint);
     const res = await axios.post("http://localhost:5000/mailerTest", {
         complaint,
         user
     })

    return res;
    // api().post("/api/mailer/sendExternalMail",
    //     {
    //         orderId: complaint.orderId,
    //         variant: layout,
    //         userId:  user,
    //         additionalData: complaint
    //     })
    //     .then(result => {
    //         if (result.data.success) {
    //             SnackBar("Wysłano powiadomienie e-mail");
    //         } else {
    //             SnackBar("Błąd podczas wysyłania powiadomienia. Sprawdź konfigurację.", "error");
    //         }
    //     })
}