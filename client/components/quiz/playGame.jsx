import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function PlayGame({
  handleImageClick,
  handlePlayClick,
  aicArt,
  clickCount,
  currScore,
  feedback,
  feedbackStyle,
  leftRight,
  maxRounds,
  setAicArt,
  titleRound,
}) {
  useEffect(() => {
    if (clickCount === maxRounds) {
      handlePlayClick();
      setAicArt([]);
    }
  }, [clickCount, maxRounds, handlePlayClick]);

  return (
    <Container
      style={{ height: '600px', maxWidth: '750px' }}
      className='d-flex flex-column align-items-center'
    >
      <Container style={{ marginBottom: '30px', marginTop: '20px' }}>
        <Row className='d-flex justify-content-center text-center'>
          <Col>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              Current Round: {clickCount + 1}
            </p>
          </Col>
          <Col style={feedbackStyle}>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              Previous Answer: {feedback}
            </p>
          </Col>
          <Col>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              Current Winnings: {currScore}
            </p>
          </Col>
        </Row>
      </Container>
      {aicArt.length > 0 ? (
        <div>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <p
              style={{
                height: '100px',
                maxWidth: '720px',
                textAlign: 'center',
                fontSize: '1.5rem',
                marginBottom: '10px',
              }}
            >
              "{aicArt[leftRight[titleRound]].title}"
            </p>
          </Row>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                width: '500px',
                height: '400px',
                overflow: 'hidden',
              }}
            >
              <Button
                variant='link'
                onClick={() => {
                  handleImageClick(0, aicArt[leftRight[0]].title);
                }}
                style={{ padding: 0 }}
                disabled={clickCount >= maxRounds}
              >
                <img
                  src={aicArt[leftRight[0]].imageUrl}
                  alt='No cheating!'
                  style={{
                    maxHeight: '300px',
                    objectFit: 'contain',
                  }}
                />
              </Button>
            </div>
            {aicArt.length > 1 && (
              <div
                style={{
                  textAlign: 'center',
                  width: '500px',
                  height: '400px',
                  overflow: 'hidden',
                }}
              >
                <Button
                  variant='link'
                  onClick={() => {
                    handleImageClick(1, aicArt[leftRight[1]].title);
                  }}
                  style={{ padding: 0 }}
                  disabled={clickCount >= maxRounds}
                >
                  <img
                    src={aicArt[leftRight[1]].imageUrl}
                    alt='No cheating!'
                    style={{
                      maxHeight: '300px',
                      objectFit: 'contain',
                    }}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default PlayGame;
