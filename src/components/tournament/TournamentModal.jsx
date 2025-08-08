import { IconButton, Slide, SwipeableDrawer } from "@mui/material";
import TournamentForm from "./TournamentForm";
import CloseIcon from '@mui/icons-material/Close';

const TournamentsModal = ({openModal, handleCloseModal}) => { 
  return (
    <SwipeableDrawer
        anchor="bottom"
        open={openModal}
        onClose={handleCloseModal}
        onOpen={() => {}}
        swipeAreaWidth={20}
        disableBackdropTransition={false}
        disableDiscovery={false}
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div className="relative bg-white w-full h-screen sm:h-auto sm:max-w-xl mx-auto rounded-t-2xl shadow-lg overflow-y-auto">
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <span className="text-sm font-semibold text-gray-800">Create Tournament</span>
              <IconButton onClick={handleCloseModal} aria-label="close" size="small">
                <CloseIcon />
              </IconButton>
            </div>
            <div className="pt-12 px-4 sm:px-6 pb-6">
              <TournamentForm />
            </div>
          </div>
        </Slide>
      </SwipeableDrawer>
  )
}
export default TournamentsModal;

