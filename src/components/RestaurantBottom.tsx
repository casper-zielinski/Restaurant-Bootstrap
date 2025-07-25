interface RestaurantBottomProps {
  Tags: string[];
}

function RestaurantBottom({ Tags }: RestaurantBottomProps) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="col-4 col-md-6 mt-3 border-top border-light border-2 d-flex flex-column align-items-center">
          <p className="text-center manufacturing-consent display-6">
            {Tags[0]}
          </p>
        </div>
        <div className="col-3 col-md-2 mt-3 border-top border-light border-2 d-flex flex-column align-items-center">
          <p className="text-center manufacturing-consent display-6">
            {Tags[1]}
          </p>
        </div>
        <div className="col-3 col-md-2 mt-3 border-top border-light border-2 d-flex flex-column align-items-center">
          <p className="text-center manufacturing-consent display-6">
            {Tags[2]}
          </p>
        </div>
      </div>
    </>
  );
}

export default RestaurantBottom;
