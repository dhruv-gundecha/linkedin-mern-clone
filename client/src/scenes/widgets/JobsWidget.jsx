import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "state";
import JobWidget from "./JobWidget";

const JobsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const token = useSelector((state) => state.token);

  const getJobs = async () => {
    const response = await fetch("http://localhost:3001/jobs", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setJobs({ jobs: data }));
  };

  const getUserJobs = async () => {
    const response = await fetch(
      `http://localhost:3001/jobs/${userId}/jobs`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setJobs({ jobs: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserJobs();
    } else {
      getJobs();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {jobs.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <JobWidget
            key={_id}
            jobIdobId={_id}
            jobUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            sx={{
              maxWidth: "70%", // Adjust the maximum width of the image
              maxHeight: "150px", // Adjust the maximum height of the image
            }}
          />
        )
      )}
    </>
  );
      }
export default JobsWidget;
