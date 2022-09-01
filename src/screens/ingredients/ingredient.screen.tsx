import React, { useContext } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles } from "infrastructure/theme";
import { AuthenticationContext } from "contexts/authentication.context";
import Counter from "components/Counter/Counter";
import { DocumentData } from "firebase/firestore";

interface IngredientScreenProps {
  ingredient: DocumentData;
}

const IngredientScreen: React.FC<IngredientScreenProps> = ({ ingredient }) => {
  const { isLoading } = useContext(AuthenticationContext);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <Image source={{ uri: ingredient.image }} />
          <Text>{ingredient.name}</Text>
          <Counter amount={ingredient.amount} />
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientScreen;
