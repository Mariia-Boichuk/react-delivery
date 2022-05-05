import InfoRow from "../../components/common/InfoRow/InfoRow";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import { State } from "../../reduxFeatures/request/requestReducer";
import { useSelector } from "react-redux";
import WidthWrapper from "../../components/common/WidthWrapper/WidthWrapper";

const ProfilePage = () => {
  const { user } = useSelector((state: State) => state.auth);

  return (
    <section>
      <PageTitle title="profile info" />
      <WidthWrapper>
        <InfoRow caption="Email" info={user.email} />
        <InfoRow caption="Role" info={user.role} />
        <InfoRow
          caption="Date created"
          info={new Date(user.created_date).toLocaleString()}
        />
      </WidthWrapper>
    </section>
  );
};

export default ProfilePage;
