import React, { useState } from 'react';
import styled from 'styled-components';

// Dummy data for reviews
const initialReviewsData = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment: "Amazing service! Highly recommend.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    comment: "Good experience, but room for improvement.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 3,
    comment: "Service was okay, could be faster.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    comment: "Absolutely loved it! Will be coming back again.",
  },
  {
    id: 5,
    name: "Chris Lee",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    comment: "Good overall, but the price could be better.",
  },
  {
    id: 6,
    name: "Olivia Brown",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    comment: "Fantastic experience, exceeded expectations!",
  },
  {
    id: 7,
    name: "David Green",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 3,
    comment: "It was decent, but not great.",
  },
];

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(initialReviewsData);
  const [reviewsToShow, setReviewsToShow] = useState(3); // Show only 3 reviews initially
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Flag to indicate if we're editing an existing review
  const [currentReviewId, setCurrentReviewId] = useState(null);
  const [newReview, setNewReview] = useState({
    name: '',
    comment: '',
    profilePic: '',
    rating: 1,
  });

  const handleShowMore = () => {
    setReviewsToShow(reviewsData.length);
  };

  const handleAddReview = () => {
    setIsModalVisible(true);
    setIsEditing(false); // Set to false when adding a new review
    setNewReview({
      name: '',
      comment: '',
      profilePic: '',
      rating: 1,
    });
  };

  const handleEditReview = (review) => {
    setIsModalVisible(true);
    setIsEditing(true);
    setCurrentReviewId(review.id);
    setNewReview({
      name: review.name,
      comment: review.comment,
      profilePic: review.profilePic,
      rating: review.rating,
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setIsEditing(false);
    setCurrentReviewId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleRatingChange = (e) => {
    setNewReview({
      ...newReview,
      rating: parseInt(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update the review
      setReviewsData(
        reviewsData.map((review) =>
          review.id === currentReviewId
            ? { ...review, ...newReview }
            : review
        )
      );
    } else {
      // Add a new review
      const newReviewData = {
        id: Date.now(), // Generate a unique ID for new reviews
        ...newReview,
      };
      setReviewsData([...reviewsData, newReviewData]);
    }

    handleCloseModal();
  };

  return (
    <ReviewsContainer>
      <h1 className='m-5'>Customer Reviews</h1>
      <ReviewsList>
        {reviewsData.slice(0, reviewsToShow).map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <ProfilePic src={review.profilePic} alt={review.name} />
              <ReviewerInfo>
                <h4>{review.name}</h4>
                <Rating>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </Rating>
              </ReviewerInfo>
            </ReviewHeader>
            <ReviewComment>{review.comment}</ReviewComment>
            <EditButton onClick={() => handleEditReview(review)}>Edit</EditButton>
          </ReviewCard>
        ))}
      </ReviewsList>

      {reviewsToShow < reviewsData.length && (
        <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
      )}

      <AddReviewButton className="mt-5" onClick={handleAddReview}>Add Review</AddReviewButton>

      {isModalVisible && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{isEditing ? 'Edit Review' : 'Add a New Review'}</h3>
            <ReviewForm onSubmit={handleSubmit}>
              <Label>
                Name:
                <Input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Profile Picture URL:
                <Input
                  type="text"
                  name="profilePic"
                  value={newReview.profilePic}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Comment:
                <Textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Rating:
                <Select
                  value={newReview.rating}
                  onChange={handleRatingChange}
                  required
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && 's'}
                    </option>
                  ))}
                </Select>
              </Label>

              <SubmitButton type="submit">{isEditing ? 'Update Review' : 'Submit Review'}</SubmitButton>
            </ReviewForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </ReviewsContainer>
  );
};

// Styled Components
const ReviewsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`
  font-size: 18px;
  color: gold;
`;

const ReviewComment = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #555;
`;

const EditButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e68900;
  }
`;

const ShowMoreButton = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 50px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddReviewButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: white; /* Set the background color to white */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: white; /* Add this line to set the background to white */
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 100px;
  background-color: white; /* Add this line to set the background to white */
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Reviews;
