# Questionnaire

Questionnaire package

[![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Questionnaire/)
[![codecov](https://codecov.io/gh/EscolaLMS/questionnaire/branch/main/graph/badge.svg?token=gBzpyNK8DQ)](https://codecov.io/gh/EscolaLMS/questionnaire)
[![phpunit](https://github.com/EscolaLMS/questionnaire/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/questionnaire/actions/workflows/test.yml)
[![downloads](https://img.shields.io/packagist/dt/escolalms/questionnaire)](https://packagist.org/packages/escolalms/questionnaire)
[![downloads](https://img.shields.io/packagist/v/escolalms/questionnaire)](https://packagist.org/packages/escolalms/questionnaire)
[![downloads](https://img.shields.io/packagist/l/escolalms/questionnaire)](https://packagist.org/packages/escolalms/questionnaire)

## What does it do

This package is used for creating Questionnaire for EscolaLms.

## Installing

- `composer require escolalms/questionnaire`
- `php artisan migrate`
- `php artisan db:seed --class="EscolaLms\Questionnaire\Database\Seeders\QuestionnairePermissionsSeeder"`

## Endpoints

All the endpoints are defined in [![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Questionnaire/)

## Tests

Run `./vendor/bin/phpunit` to run tests. See [tests](https://github.com/EscolaLMS/Questionnaire/tree/main/tests) folder as it's quite good staring point as documentation appendix.

Test details [![codecov](https://codecov.io/gh/EscolaLMS/questionnaire/branch/main/graph/badge.svg?token=gBzpyNK8DQ)](https://codecov.io/gh/EscolaLMS/questionnaire) [![phpunit](https://github.com/EscolaLMS/questionnaire/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/questionnaire/actions/workflows/test.yml)

## Events

This package does not dispatch any events.

## Listeners

This package does not listen for any events

## How to use this on frontend.

### Admin panel

**Left menu**

![Menu](./docs/questionnaire/menu.png "Menu")

**List of questionnaire**

![List of questionnaire](./docs/questionnaire/list.png "List of questionnaire")

**Creating/editing questionnaire**

![Creating/editing questionnaire](./docs/questionnaire/new_questionnairy.png "Creating/editing questionnaire")

**Creating/editing question**

![Creating/editing question](./docs/questionnaire/add_question.png "Creating/editing question")

**Assign questionnaire to Course**

![Assign questionnaire to Course](./docs/questionnaire/assign_course.png "Assign questionnaire to Course")

**List of Answers**

![List of Answers](./docs/questionnaire/answers.png "List of Answers")

**Report**

![Report](./docs/questionnaire/report.png "Report")

### Front Application

On the front-end we have the possibility to send an evaluation for the course, where we call the action to evaluate the course depends on the implementation, e.g. after all the topics in the course have been finished. To do so, we can use this component [RateComponent](https://components.wellms.io/#rate)

The endpoint we are interested in is [endpoint](https://escolalms.github.io/Questionnaire/#/QuestionnaireStars/000d633e3d443742474a090e856c981a)

Example component implementation.

```tsx
const Rating: React.FC<{
  model: string;
  modelID: number;
  questionnary: EscolaLms.Questionnaire.Models.Questionnaire;
  close: () => void;
}> = ({ model, modelID, questionnary, close }) => {
  const { sendQuestionnaireAnswer } = useContext(EscolaLMSContext);
  const [state, setState] = useState(initialState);

  const { t } = useTranslation();

  const handleSendAnswer = useCallback(async () => {
    if (questionnary.questions) {
      setState((prevState) => ({
        ...prevState,
        loading: true,
      }));
      try {
        const request = await sendQuestionnaireAnswer(
          model,
          modelID,
          questionnary.id,
          {
            question_id: questionnary.questions[state.step].id,
            rate: state.rating,
            note: state.note,
          }
        );
        if (request.success) {
          toast.success(request.message);
        }
      } catch (error) {
        toast.error(t("UnexpectedError"));
        console.error(error);
      } finally {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          step: prevState.step + 1,
          note: "",
          rating: null,
        }));
      }
    }
  }, [model, modelID, questionnary.id, state]);

  const handleSave = useCallback(() => {
    handleSendAnswer();
    if (
      questionnary.questions &&
      state.step === questionnary.questions.length - 1
    ) {
      setState((prevState) => ({
        ...prevState,
        showLastScreen: true,
      }));
    }
  }, [questionnary, state.step, handleSendAnswer]);

  return (
    <div className={styles.questionnaire}>
      <div className={styles.questionnaire__close} onClick={() => close()}>
        <Icon name="close" />{" "}
      </div>
      {!state.showLastScreen ? (
        <div>
          <h3>{questionnary.title}</h3>
          {questionnary.questions && (
            <div className={styles.questionnaire__question}>
              <h4>{questionnary.questions[state.step]?.title}</h4>
              <div className={styles.questionnaire__stars}>
                {Array.from(Array(5).keys()).map((i) => (
                  <span
                    key={i}
                    className={
                      state.rating && i < state.rating
                        ? styles.questionnaire__stars__active
                        : ""
                    }
                  >
                    <Icon
                      name="starRating"
                      onClick={() =>
                        setState((prevState) => ({
                          ...prevState,
                          rating: i + 1,
                        }))
                      }
                    />
                  </span>
                ))}
              </div>
              <textarea
                placeholder={t("QuestionnaireBox.writeNote")}
                value={state.note}
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    note: e.target.value,
                  }))
                }
                name="notenote"
              ></textarea>
            </div>
          )}

          <Button
            disabled={!state.rating}
            loading={state.loading}
            onClick={() => handleSave()}
          >
            Zapisz
          </Button>
        </div>
      ) : (
        <div className={styles.thankbox}>
          <Icon name="rateThx" />
          <h3>{t("QuestionnaireBox.thanks")}</h3>
          <p>{t("QuestionnaireBox.great")}</p>{" "}
          <Button onClick={() => close()}>{t("QuestionnaireBox.back")}</Button>
        </div>
      )}
    </div>
  );
};

export default Rating;
```

## Permissions

Permissions are defined in [seeder](https://github.com/EscolaLMS/Questionnaire/blob/main/database/seeders/QuestionnairePermissionsSeeder.php)

## Database relation

1. `Questionnaires` general Questionnaire (Title) is related to Questionnaire_models
2. `Questionnaire_models` Questionnaire model belong to model type and model id
3. `Questionnaire_model_types` Model Type (Curse, Webinar etc.)
4. `Questions` Question belong to Questionnaire
5. `Question_answers` Question answer is related to Question and Questionnaire_models

```
Questionnaires 1 -> n Questionnaire_models
Questionnaires 1 -> n Questions
Questionnaire_models 1 -> n Questionnaire_model_types
Question_answers 1 -> n Questions
Question_answers 1 -> n Questionnaire_models
```

To add new model type you need to insert new record to `Questionnaire_model_types`

```
title -> Title of model (example - 'Course')
model_class => Model class name (example 'EscolaLms\Courses\Models\Course')
```
