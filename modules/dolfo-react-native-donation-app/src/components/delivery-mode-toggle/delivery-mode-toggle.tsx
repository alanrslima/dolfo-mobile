import React, {useImperativeHandle, useRef, useState} from 'react';
import {
  BottomSheet,
  BottomSheetHandle,
  ToogleList,
} from 'dolfo-react-native-ui';

type DeliveryModeToggleProps = {
  onChange(value: string): void;
};

export type DeliveryModeToggleHandle = {
  show(): void;
};

export const DeliveryModeToggle = React.forwardRef<
  DeliveryModeToggleHandle,
  DeliveryModeToggleProps
>((props, ref) => {
  const bottomSheetRef = useRef<BottomSheetHandle>(null);
  const [value, setValue] = useState('1');

  function show() {
    bottomSheetRef.current?.show({
      title: 'Modo de entrega',
    });
  }

  function hide() {
    bottomSheetRef?.current?.hide();
  }

  function onChange(id: string) {
    setValue(id);
    hide();
    props.onChange(id);
  }

  useImperativeHandle(ref, () => ({
    show,
  }));

  return (
    <BottomSheet
      content={
        <ToogleList
          value={value}
          onChange={onChange}
          options={[
            {
              leadingIcon: 'Car',
              title: 'Buscar pet',
              description:
                'Você irá até o doador para buscar o pet no dia marcado',
              value: '1',
            },
            {
              leadingIcon: 'House',
              title: 'Entrega em casa',
              description:
                'O doador irá entregar o pet na sua casa no dia marcado',
              value: '2',
            },
          ]}
        />
      }
      ref={bottomSheetRef}
    />
  );
});
