import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const loggedEmail = user?.email;
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/review/user/?loggedUserEmail=${loggedEmail}`
      );
      return res.data;
    },
  });

  // Delete Review

  const handleDeleteReview = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${review._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Review has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <h1>My Reviews</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Property Information</th>
              <th>Review Information</th>
              <th>Agent Information</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, idx) => (
              <tr key={review._id}>
                <td>{idx + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={review.propertyImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{review.propertyTitle}</div>
                      <div className="text-sm opacity-50">
                        Location: {review.propertyLocation}
                      </div>
                      <div className="text-sm opacity-50">
                        Price Range: {review.minPrice}-{review.maxPrice}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <div className="flex">
                    {" "}
                    <div className="flex flex-col space-y-2">
                      <span className="badge badge-ghost badge-sm">
                        Review by: {review.reviewerName}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        {review.reviewerEmail}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        Review Time: {review.formattedTime}
                      </span>
                      <div>
                        <div className="chat chat-start">
                          <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                              <img src={review.reviewerImage} />
                            </div>
                          </div>
                          <div className="chat-bubble max-w-xs">
                            {review.review}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <div className="flex">
                    {" "}
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={review.agentImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="badge badge-ghost badge-sm">
                        {review.agentName}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        {review.agentEmail}
                      </span>
                    </div>
                  </div>
                </td>

                <th>
                  <button
                    onClick={() => handleDeleteReview(review)}
                    className="btn"
                  >
                    Delete Review
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
