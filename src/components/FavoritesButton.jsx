import { Button, Col, Container, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavouriteButton = () => {
  const navigate = useNavigate();
  const listLength = useSelector((state) => {
    return state.favourites.content.length;
  });
  return (
    <Container>
      <Row>
        <Col xs={3} className="offset-sm-9">
          <Button onClick={() => navigate("/favourites")}>
            <HeartFill /> Favoutites:{listLength}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default FavouriteButton;
