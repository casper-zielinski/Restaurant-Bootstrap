export function clearFields(
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setTelefonNumber: React.Dispatch<React.SetStateAction<string>>,
) {
  setEmail("");
  setName("");
  setTelefonNumber("");
}
