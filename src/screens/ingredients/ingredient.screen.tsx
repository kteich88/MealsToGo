import React, { useContext } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import LoadingScreen from "screens/loading/loading.screen";
import { globalStyles } from "infrastructure/theme";
import { AuthenticationContext } from "contexts/authentication.context";
import Counter from "components/Counter/Counter";
import { DocumentData } from "firebase/firestore";
import Icon from "components/Icons/Icon";

interface IngredientScreenProps {
  ingredient: DocumentData;
}

const IngredientScreen: React.FC<IngredientScreenProps> = ({ ingredient }) => {
  const { isLoading } = useContext(AuthenticationContext);
  console.log("INGREDIENT", ingredient);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={globalStyles.safeArea}>
          <Icon type={ingredient.icon.type} name={ingredient.icon.name} />
          <Text>{ingredient.name}</Text>
          {/*  If count is equal to zero show add to grocery list button */}
          {/* <Counter amount={ingredient.amount} /> */}
        </SafeAreaView>
      )}
    </>
  );
};

export default IngredientScreen;
