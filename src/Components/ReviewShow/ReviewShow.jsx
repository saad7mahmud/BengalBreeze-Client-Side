import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ReviewShow = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-reviews/public");
      return res.data;
    },
  });

  return (
    <div className="">
      <h1 className="text-4xl font-semibold text-center">Latest Reviews</h1>
      <div className="justify-center flex">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}

            <tbody>
              {reviews.map((review, idx) => (
                <tr key={review._id}>
                  {/* <td>{idx + 1}</td> */}

                  <td></td>
                  <td>
                    <br />

                    <div>
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className=" rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src={review.reviewerImage}
                            />
                          </div>
                        </div>
                        <div className="chat-header">
                          {review.reviewerName}
                          <time className="text-xs ms-3 opacity-50">
                            {review.formattedTime} on {review.formattedDate}
                          </time>
                        </div>
                        <div className="chat-bubble min-w-full">
                          {review.review}
                        </div>
                        <div className="chat-footer opacity-50">
                          Property Name: {review.propertyTitle}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <br />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewShow;
