# **Git / GitHub 익히기 **

## **Why**

- 소스 코드 버전 관리를 위해서 필수적인 도구라서
- 협업을 위해서

## **학습 목표**

- 기초적인 Git 명령을 익힌다.
- 브랜치의 개념을 이해한다.
- GitHub flow를 이해한다.
- GitHub을 이용해서 PR을 할 수 있다.

## **배경 지식**

- Git의 역사

---

## # git 쓰는 이유

- 소스 관리가 겁나 불편함
- 예전으로 돌아가서 다시 수정 가능함
- 복잡도가 높을 수록 효과가 증대되지만 복잡도가 낮은 작업은 무의미하게 느껴질 수 있음
    - 협업하면 복잡도가 올라감
    - 큰 프로그램을 짜면(안에 기능(함수) 만 수십 개 일 꺼임) → 복잡도 올라감

---

## # git Key Word

### git init

- `.git` 이라는 `local repo`를 생성

### git add

- `working dir` → `stage area`

### git commit

- `stage area` →  `repository`
- 깃은 commit(snap shop) 을 관리하는 프로그램
- commit 은 `repository` 들어있다
- 내 컴퓨터가 살아있는 한 살아있다 → 더 안전하게 하려면 원격 저장소 git hub 에 저장
- `git commit` 은 스테이지의 내용들을 가지고 commit 객체를 만드는 행위
- commit 은 링크드 리스트로 이루어져 자신의 부모에 commit 에 대한 내용도 함께 보유하고 있음

### git push

- commit(뭉치들) → github( remote 원격 저장소)

### git status

- 3가지 디렉토리 비교(repository, stage, work dir)
- commit 이후 스테이지는 비워 지지 않는다. 다만 head와 stage가 같아서 나오지 않을 뿐

### git pull 과 git fetch

- git pull 은 `working dir + stage + head 까지 맞춰주는 것`
- git fetch 는 `working dir` 에만 올려주고 나머지 `stage + commit(HEAD)`맞추는 것은 별도로 해줘야 함,
- `더 알아볼 필요가 있음`

### git checkout

- head 를 변경하는 명령어
- `git checkout -b step` 브렌치 생성 후 HEAD 변경

### Git branch

- 뭔가 작업을 할 때는 항상 branch 생성 후 작업할 것
- branch 는 참조다 → commit 에 대한 참조다
- `git checkout testBranch` 을 통해 다른 testBranch 로 이동할 경우 해당 branch 마지막 commit(보통은 그렇다 아닐 경우도 있다) 으로 HEAD 가 옮겨가고 → git repo가 해당 commit의 내용으로 변경된다.

### Git rebase, merge

- merge, rebase 는 갈라진 브랜치들을 통합할 때 사용한다.
- rebase 보다 merge가 안정적이다.
- 이유에 대해선 더 파보자

### git pull request

- [코드스쿼드 링크](https://github.com/code-squad/codesquad-docs/blob/master/codereview/README.md)

## # git repo 구조
https://www3.ntu.edu.sg/home/ehchua/programming/howto/images/Git_StorageDataFlow.png
- [깃 구조에 대한 이해](https://nanite.tistory.com/39)
- working dir | working tree
    - 로컬
- stage area
    - commit 을 준비하는 자료가 저장되는 곳
- repogitory
    - commit 된 내용이 저장되는 곳
- remote
    - 원격 저장소

## tip

- branch 위에서만 작업할 것 → HEAD detachment 하지 말것
