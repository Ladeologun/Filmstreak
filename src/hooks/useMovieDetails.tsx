import {useState, useCallback} from 'react';
import {toggleWishlist, checkMovieAccountState, MovieStatusType} from '~movies/api';


type RequestStatus = 'success' | 'error';

export const useMovieDetails = (movieId: number) => {

   const [addingMovieToWishlist, setAddingMovieToWishlist] = useState(false);
   const [checkingMovieState, setCheckingMovieState] = useState(false);
   const [isMovieOnWishlist, setMovieOnWishlist] = useState(false);
   const [showWatchlistWalkthrough, setShowWatchlistWalkthrough] = useState(false);
   const [showErrorModalMessage, setShowErrorModalMessage] = useState('');

   const handleAddToWishlist = useCallback(
      (status: boolean) => {
         toggleWishlist(
            movieId,
            status,
            (type: RequestStatus, response: MovieStatusType, error: Error | null) => {
               setAddingMovieToWishlist(false);
               if (type === 'success' && response) {
                  handleCheckMovieState();
                  if (status) {
                     setShowWatchlistWalkthrough(true);
                  }
               } else {
                  setShowErrorModalMessage(error?.message || 'An error occurred');
               }
            },
         );
      },
      [movieId],
   );

   const handleCheckMovieState = useCallback(() => {
      checkMovieAccountState(
         movieId,
         (type: RequestStatus, response: MovieStatusType, error: Error | null) => {
            setCheckingMovieState(false);
            if (type === 'success' && response) {
               setMovieOnWishlist(response?.watchlist);
            } else {
               setShowErrorModalMessage(error?.message || 'An error occurred');
            }
         },
      );
   }, [movieId]);

   const onWalkthroughClose = useCallback(() => {
      setShowWatchlistWalkthrough(false);
   }, []);

   return {
      addingMovieToWishlist,
      checkingMovieState,
      isMovieOnWishlist,
      showWatchlistWalkthrough,
      showErrorModalMessage,
      setShowErrorModalMessage,
      setCheckingMovieState,
      handleAddToWishlist,
      handleCheckMovieState,
      onWalkthroughClose,
   };
};
