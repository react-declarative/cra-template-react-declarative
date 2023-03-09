import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const UserInfo = () => (
  <Grid container spacing={1}>
    <Grid item>
      <Avatar
        alt="Anonymous"
        imgProps={{
          crossOrigin: "anonymous",
        }}
      />
    </Grid>
    <Grid item xs>
      <Stack justifyContent="center" height="100%">
        <Typography>Anonymous</Typography>
      </Stack>
    </Grid>
    <Grid item>
      <Stack justifyContent="center" height="100%">
        <Button>Logout</Button>
      </Stack>
    </Grid>
  </Grid>
);

export default UserInfo;
