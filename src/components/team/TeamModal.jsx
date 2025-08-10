import { IconButton, Slide, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TeamRegistration from "./TeamCard";
// import PlayerCard from "./PlayerCard";

const TeamModal = ({ openModal, handleCloseModal, data }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openModal}
      onClose={handleCloseModal}
      onOpen={() => {}}
      swipeAreaWidth={20}
      disableBackdropTransition={false}
      disableDiscovery={false}
      PaperProps={{
        className: "bg-transparent shadow-none", // makes the drawer background transparent
      }}
    >
      <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
        <div className="relative bg-white w-full h-screen sm:h-auto sm:max-w-xl mx-auto rounded-t-3xl shadow-lg overflow-y-auto transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 sticky top-0 bg-white z-20 rounded-t-3xl">
            <span className="text-lg font-semibold text-gray-900">
              Player Registration
            </span>
            <IconButton
              onClick={handleCloseModal}
              aria-label="close"
              size="small"
              className="hover:bg-gray-100"
            >
              <CloseIcon className="text-gray-600" />
            </IconButton>
          </div>

          {/* Content */}
          <div className="px-5 py-6 sm:px-6">
            <TeamRegistration results={data[0]} />
          </div>
        </div>
      </Slide>
    </SwipeableDrawer>
  );
};
export default TeamModal;
