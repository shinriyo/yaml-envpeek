# YAML-EnvPeek

YAML 파일을 위한 환경 변수 참조 기능을 제공하는 Visual Studio Code 확장 프로그램입니다.

## 기능

- **환경 변수 호버 표시**: YAML 파일 내의 `${VARIABLE_NAME}` 또는 `${env:VARIABLE_NAME}`에 마우스를 올리면 `.env` 파일에서 실제 값을 표시
- **정의로 이동**: 
  - 환경 변수에서 Command+클릭(Mac) 또는 Ctrl+클릭(Windows/Linux)으로 정의 위치로 이동
  - 호버 메시지 내의 파일 경로를 클릭하여 정의 파일 열기
- **여러 .env 파일 지원**: 현재 디렉토리에서 작업 공간 루트까지 모든 `.env` 파일(`.xxxenv` 포함) 검색
- **명확한 피드백**: 환경 변수를 찾을 수 없는 경우 경고 메시지 표시

## 사용 방법

1. 환경 변수 참조가 포함된 YAML 파일 열기
2. `${VARIABLE_NAME}` 또는 `${env:VARIABLE_NAME}`에 마우스를 올려 값 확인
3. Command+클릭(Mac) 또는 Ctrl+클릭(Windows/Linux)으로 정의 위치로 이동
4. 호버 메시지 내의 파일 경로를 클릭하여 정의 파일 열기

## 사용 예시

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

`${DATABASE_URL}`에 마우스를 올리면 다음과 같이 표시됩니다:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## 요구 사항

- Visual Studio Code 1.100.0 이상

## 확장 프로그램 설정

이 확장 프로그램은 다음 설정을 제공합니다:

* `yaml-envpeek.enable`: 확장 프로그램 활성화/비활성화

## 알려진 문제

현재 없음.

## 릴리스 노트

### 0.0.1

YAML-EnvPeek 초기 릴리스:
- 기본 환경 변수 호버 표시
- 정의로 이동 기능
- 여러 .env 파일 지원
- 정의되지 않은 변수에 대한 명확한 피드백

## 기여

GitHub에서 이슈를 열거나 풀 리퀘스트를 제출해 주세요.

## 라이선스

이 확장 프로그램은 MIT 라이선스 하에 제공됩니다. 