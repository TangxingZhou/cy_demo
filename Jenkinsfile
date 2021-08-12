podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: cypress-base
        image: cypress/base:14.16.0
        command:
        - sleep
        args:
        - 99d
      - name: cypress-browsers
        image: cypress/browsers:node14.16.0-chrome89-ff86
        command:
        - sleep
        args:
        - 99d
''') {
  node(POD_LABEL) {
    stage('run cypress e2e tests') {
      git credentialsId: 'cccccc', url: 'git@github.com/TangxingZhou/cy_demo.git', branch: 'master'
      container('cypress-browsers') {
        stage('run tests') {
          sh '''
            npm run e2e:chrome
          '''
        }
      }
    }

  }
}