import {
   Fragment,
   forwardRef,
   LegacyRef,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from 'react';
import {Image, ImageStyle, Modal, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Text} from 'react-native';
import styles from './styles';
import {COLORS} from '~styles';

type Props = {
   hidePrevious?: boolean;
   backgroundColor?: string;
   children: React.ReactNode;
   onNext?: () => void;
   onPrevious?: () => void;
   contentTitle?: string;
   contentDesc?: string;
   position?: 'top' | 'bottom';
   nextBtnText?: string;
   contentContainerStyle?: ViewStyle;
   childrenContainerStyle?: ViewStyle;
   triangleStyle?: ImageStyle;
};

export interface LayoutProps {
   x?: number;
   y?: number;
   width?: number;
   height?: number;
   pageX?: number;
   pageY?: number;
}

export interface WalkthroughHandle {
   open: () => void;
   close: () => void;
   layout: LayoutProps;
}

const Walkthrough = forwardRef<WalkthroughHandle, Props>(
   (
      {
         triangleStyle,
         contentContainerStyle,
         childrenContainerStyle,
         backgroundColor,
         hidePrevious,
         onNext,
         onPrevious,
         contentTitle,
         contentDesc,
         position = 'bottom',
         nextBtnText,
         ...props
      }: Props,
      ref,
   ) => {
      const [layout, setLayout] = useState<LayoutProps>({});
      const [show, setShow] = useState(false);
      const childRef = useRef<View>(null);

      useEffect(() => {
         childRef?.current &&
            childRef?.current.measure((x, y, width, height, pageX, pageY) => {
               setLayout({x, y, width, height, pageX, pageY});
            });
      });

      useImperativeHandle(ref, () => ({
         open,
         close,
         layout,
      }));

      const clonedChild = () => {
         return props.children;
      };

      const open = () => {
         setShow(true);
      };

      const close = () => {
         setShow(false);
      };

      const getContentTopPosition = () => {
         if (position === 'bottom') {
            return (layout?.height! + layout?.pageY! || 0) + 20;
         } else {
            return layout?.pageY! - layout?.height! + 30;
         }
      };

      const getTriangleTopPosition = () => {
         if (position === 'bottom') {
            return -8;
         } else {
            return layout?.height! - 48;
         }
      };

      const getTriangleTransform = () => {
         if (position == 'top') {
            return [{rotate: '180deg'}];
         } else {
            return [{rotate: '0deg'}];
         }
      };

      return (
         <Fragment>
            <View ref={ref as LegacyRef<View>} style={childrenContainerStyle}>
               <View ref={childRef}>{props.children}</View>
            </View>

            <Modal
               visible={show}
               transparent={true}
               animationType={'fade'}
               onDismiss={close}
               onRequestClose={close}>
               <View style={{backgroundColor: 'rgba(13, 24, 33, 0.5)', flex: 1}}>
                  <View
                     pointerEvents="none"
                     style={{
                        position: 'absolute',
                        top: layout?.pageY || 0,
                        left: layout?.pageX || 0,
                        width: layout?.width,
                        height: layout?.height,
                        backgroundColor: backgroundColor ?? 'white',
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 11,
                     }}>
                     {clonedChild()}
                  </View>
                  <View
                     style={[
                        styles.contentContainer,
                        {top: getContentTopPosition()},
                        contentContainerStyle,
                     ]}>
                     <Image
                        source={require('../../assets/drawables/triangle.png')}
                        tintColor={COLORS.SKYBLUE}
                        style={[
                           {
                              position: 'absolute',
                              top: getTriangleTopPosition(),
                              transform: getTriangleTransform(),
                           },
                           triangleStyle,
                        ]}
                     />

                     <Text style={styles.headerText}>{contentTitle}</Text>
                     <Text style={styles.headerDesc}>{contentDesc}</Text>
                     <View style={styles.headerActionContainer}>
                        {!hidePrevious && (
                           <TouchableOpacity onPress={onPrevious}>
                              <Text style={styles.headerActionBtnText}>Previous</Text>
                           </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={onNext}>
                           <Text
                              style={[styles.headerActionBtnText, styles.headerActionBtnTextNext]}>
                              {nextBtnText ?? 'Next'}
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </Modal>
         </Fragment>
      );
   },
);

export default Walkthrough;
