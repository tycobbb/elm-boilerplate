import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

-- main
main : Program Never Model Msg
main =
  Html.beginnerProgram
    { model = init
    , view = view
    , update = update
    }

-- model
type alias Model
  = Int

init : Model
init =
  0

-- update
type Msg
  = Increment
  | Decrement

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model + 1
    Decrement ->
      model - 1

-- view
view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Decrement ]
      [ text "-"
      ]
    , div []
      [ text ((toString model) ++ " clicks")
      ]
    , button [ onClick Increment ]
      [ text "+"
      ]
    ]
