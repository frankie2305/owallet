import React, { FunctionComponent } from 'react';
import { PageWithScrollViewInBottomTabView } from '../../../components/page';
import { RouteProp, useRoute, useTheme } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { StyleSheet } from 'react-native';
import { spacing } from '../../../themes';
import { ValidatorDetailsCard } from './validator-details-card';

export const ValidatorDetailsScreen: FunctionComponent = observer(() => {
  const route = useRoute<
    RouteProp<
      Record<
        string,
        {
          validatorAddress: string;
          apr: number;
        }
      >,
      string
    >
  >();
  const { colors } = useTheme();
  const validatorAddress = route.params.validatorAddress;
  const apr = route.params.apr;

  return (
    <PageWithScrollViewInBottomTabView backgroundColor={colors['background']}>
      <ValidatorDetailsCard
        containerStyle={{
          ...styles.containerCard
        }}
        validatorAddress={validatorAddress}
        apr={apr}
      />
    </PageWithScrollViewInBottomTabView>
  );
});

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: spacing['24'],
    paddingVertical: spacing['20'],
    paddingHorizontal: spacing['24'],
    marginTop: spacing['16']
  }
});
