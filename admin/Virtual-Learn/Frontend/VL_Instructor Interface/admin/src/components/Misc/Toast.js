import { useEffect } from 'react';
import { useSnackbar } from 'react-simple-snackbar';

export default function Toast(props) {
  const [openSnackbar] = useSnackbar();
  useEffect(() => {
    openSnackbar(props.message);
  });
}
