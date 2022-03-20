import InfoTable from "../../components/InfoTable/InfoTable";
import InfoRow from "../../components/InfoRow/InfoRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import { State } from "../../reduxFeatures/reducers/reducer";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state: State) => state.auth);

  return (
    <section>
      <PageTitle title="profile info" />
      <InfoTable>
        <InfoRow caption="Email" info={user.email} />
        <InfoRow caption="Role" info={user.role} />
        <InfoRow
          caption="Date created"
          info={new Date(user.created_date).toLocaleString()}
        />
      </InfoTable>
    </section>
  );
};

export default ProfilePage;
