import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import InfoTable from "../../components/InfoTable/InfoTable";
import InfoRow from "../../components/InfoRow/InfoRow";
import PageTitle from "../../components/PageTitle/PageTitle";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <PageTitle title="profile info" />
      <InfoTable>
        <InfoRow caption="Email" info={user.email} />
        <InfoRow caption="Role" info={user.role} />
        <InfoRow
          caption="Date created"
          info={new Date(user.created_date).toLocaleString()}
        />
      </InfoTable>
    </>
  );
};

export default ProfilePage;
